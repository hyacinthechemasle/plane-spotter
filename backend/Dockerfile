FROM python:3.13

RUN mkdir /app

#Set working directory inside the container

WORKDIR /app

# Prevent python from buffering stdout and stderr
ENV PYTHONUNBEUFFERED=1

#Upgrade pip
RUN pip install --upgrade pip

# Copy the backend project and install dependencies

COPY requirements.txt /app/

# Run command to install the dependencies inside requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the django backend to the container
COPY . /app/

#Expose the django port

EXPOSE 8000

#run the server

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

