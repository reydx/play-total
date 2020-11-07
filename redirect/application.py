# -*- coding: UTF-8 -*-
"""
@Summary : 
@Author  : Rey
@Time    : 2020-08-13 13:41
@Log     :
           author datetime(DESC) summary
           Rey  2020-08-13 13:41
"""
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn


def redirect_middleware(app):
    @app.middleware("http")
    async def redirect(request: Request, call_next):
        return FileResponse("index.html")


app = FastAPI()


@app.get("/")
async def index():
    return FileResponse("static/index.html")

redirect_middleware(app)

app.mount("/", StaticFiles(directory="."))


if __name__ == '__main__':
    uvicorn.run(app="application:app", host="0.0.0.0", port=3000, reload=True)
