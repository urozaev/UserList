import falcon
from waitress import serve
from models import *
from playhouse.shortcuts import model_to_dict
import json


class UserIdResource():
            
    def on_delete(self, req, resp, user_id):
        try:
            delete_user(user_id)
            resp.body = 'Пользователь удален'
        except urozaevModel.DoesNotExist:
            resp.status = falcon.HTTP_404
    
    
    def on_put(self, req, resp, user_id):
        try:
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
            users = urozaevModel.select().order_by(urozaevModel.id)
            resp.body = json.dumps([model_to_dict(u) for u in users], default=str)
        except urozaevModel.DoesNotExist:
            resp.status = falcon.HTTP_404
        
        
    def on_post(self, req, resp):
        try:
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


api = falcon.API()

users = UserResource()
users_id = UserIdResource()

api.add_route('/users/', users)
api.add_route('/users/{user_id}', users_id)

serve(api, host="127.0.0.1", port=8001)
# hupper -m waitress --port=8001 app:application
