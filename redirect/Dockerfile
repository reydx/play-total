FROM czpfirst/dx-ubuntu1804-py380
COPY . /opt/play-redirect
WORKDIR /opt/play-redirect
RUN pip3 install -r requirements.txt
RUN pip3 install -r requirements.txt
EXPOSE 3000
CMD uvicorn application:app --host 0.0.0.0 --port 3000