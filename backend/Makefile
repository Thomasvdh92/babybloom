# use virtualenv or virtualenv-wrapper location based on availability

PYTHON_VERSION = 3.6

ifdef WORKON_HOME
	VIRTUAL_ENV = $(WORKON_HOME)/backend
else
	VIRTUAL_ENV = $(PWD)/env
endif
PYTHON = $(VIRTUAL_ENV)/bin/python
PIP = $(VIRTUAL_ENV)/bin/pip

env:
	virtualenv -p $(shell which python$(PYTHON_VERSION)) env

requirements.txt.done: env requirements.txt
	${PIP} install -r requirements.txt 
	touch requirements.txt.done

runserver: requirements.txt.done
	${PYTHON} -m manage migrate
	${PYTHON} -m manage runserver 0.0.0.0:8000

# Run postman tests from the commandline to test the endpoints
postmantests:
	${PYTHON} manage.py flush && ${PYTHON} python manage.py sqlsequencereset data
	newman run postmantests/backendrequests.postman_collection.json