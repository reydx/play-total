FROM czpfirst/dx-ubuntu1804-py380
COPY . /opt/play-backend
WORKDIR /opt/play-backend
RUN pip3 install -r requirements.txt
EXPOSE 5000
CMD uvicorn application:app --host 0.0.0.0 --port 5000