import falcon
from falcon_cors import CORS
from waitress import serve
from models import *
from playhouse.shortcuts import model_to_dict
import json


class CORSComponent(object):
    def process_response(self, req, resp, resource, req_succeeded):
        resp.set_header('Access-Control-Allow-Origin', '*')

        if (req_succeeded
            and req.method == 'OPTIONS'
            and req.get_header('Access-Control-Request-Method')
        ):

            allow = resp.get_header('Allow')
            resp.delete_header('Allow')

            allow_headers = req.get_header(
                'Access-Control-Request-Headers',
                default = '*'
            )

            resp.set_headers((
                ('Access-Control-Allow-Methods', allow),
                ('Access-Control-Allow-Headers', allow_headers),
                ('Access-Control-Max-Age', '1728000'),  # 20 days
            ))


class UserIdResource():
            
    def on_delete(self, req, resp, user_id):
        try:
            resp.status = falcon.HTTP_200
            delete_user(user_id)
            resp.body = 'Пользователь удален'
        except urozaevModel.DoesNotExist:
            resp.status = falcon.HTTP_404
    
    
    def on_put(self, req, resp, user_id):
        try:
            resp.status = falcon.HTTP_200
            json_data = json.loads(req.stream.read())
            user = update_user(user_id)
            user.name = json_data['name']
            user.birthday = json_data['birthday']
            user.phone = json_data['phone']
            user.role = json_data['role']
            user.isArchive = json_data['isArchive']
            user.save()
            resp.body = 'Пользователь обновлен'
        except urozaevModel.DoesNotExist:
            resp.status = falcon.HTTP_404


class UserResource():
    
    def on_get(self, req, resp):
        try:
            resp.status = falcon.HTTP_200
            users = urozaevModel.select().order_by(urozaevModel.id)
            resp.body = json.dumps([model_to_dict(u) for u in users], default = str)
        except urozaevModel.DoesNotExist:
            resp.status = falcon.HTTP_404
        
        
    def on_post(self, req, resp):
        try:
            resp.status = falcon.HTTP_200
            json_data = json.loads(req.stream.read())
            create_user(
                json_data["name"], 
                json_data["birthday"], 
                json_data["phone"], 
                json_data["role"], 
                json_data["isArchive"]
            )
            resp.body = "Пользователь успешно создан"
        except urozaevModel.DoesNotExist:
            resp.status = falcon.HTTP_404
            

api = falcon.API(middleware = [CORSComponent()])

users = UserResource()
users_id = UserIdResource()

api.add_route('/', users)
api.add_route('/{user_id}', users_id)

serve(api, host = "127.0.0.1", port = 8001)
# hupper -m waitress --port = 8001 app:application
