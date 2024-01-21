FROM python:alpine

WORKDIR /home/evan/projects/nw-hacks/back

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

ENTRYPOINT ["python3"]
CMD ["main.py"]
