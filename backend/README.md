# Backend

## Database

This application will make use of a postgresql database. To use this database,
it needs to be configured locally. Install postgresql to your environment and
create a database and a user. The name of the database needs to be 'babybloom'
and a user needs to be added to the database with full rights. The user needs to
be named 'postgres' and it's password needs to be 'postgres'. To properly
configure this, follow this tutorial:
https://medium.com/agatha-codes/painless-postgresql-django-d4f03364989

The Django framework will take care of giving shape to the database with
migrations and migrating.

## Server

This project requires you to have a virtual
environment([virtualenv](https://virtualenv.pypa.io/en/latest/)). 
To activate this virtual environment, go to your project directory and create the virtual environment. After creating it, activate it with:

```
source venv/bin/activate
```

This environment will contain certain dependecies and packages. To install these
dependecies and packages, enter the following command in the terminal:

```
make requirements.txt.done
```

After running the command above, the database needs to be shaped and the server
needs to be running. To do this, enter the following command:

```
make runserver
```

If everything went well, the server is now running on localhost:8000. To make
use the browsable API, enter the following url in your favorite browser:
http://localhost:8000/api. Here you can see the different endpoints of the
application. The Django admin tool can be found on http://localhost:8000/admin.

### Aanmaken gebruiker

To login on the admin tool, the database needs a user. To create a user from the
command line, use the following command:

```
python manage.py createsuperuser
```

Here you will be prompted a few questions, and if you follow them correctly you
can now login with the data you just entered in response to these questions.

## Aanpassen database

When a change has been made to an existing model or a new model has been
creaeted, you need to reflect this in a migration filee. To generate such a
migration file, enter the follow command in the command line:

```
python manage.py makemigrations
```

OR

```
python manage.py makemigrations -n <MIGRATION_NAME>
```

Example:

```
python manage.py makemeigrations -n 'add_user_models'
```

In the last example, you can provide a name for your migration file. Usually,
Django generates a name for you and more often that not, this name is not very
clarifying. It is better to provide a name yourself, so its clear which
migration file does what.

Once a migration file is generated, you can start migrating to implement these
changes. This can be done using the following command:

```
python manage.py migrate
```

It's also possible to rollback to a certain migration, in case you've made a
mistake. This can be done with the following command:

```
python manage.py migrate <APPNAME> <MIGRATION_NUMBER>
```

Example:

```
python manage.py migrate data 0002
```

## Endpoints

These are the following endpoints provided by the application

```
/api/data (get, post)
/api/data?user={user} (get)
/api/data/{id}/ (get, put, delete)
/api/user (get, post)
/api/user/{id}/ (get, put, delete)
```
# GitHub workflow

## Issues

New implementation details are assigned to the project board via issues. These issues can be created in GitHub.
The project board is automated based on open/closed issues and pull requests. In case of this projects there hardly will be pull requests, since it's being developed by two developers.

Closing an issue can be achieved automaticly with reference in pull request or commit, see: https://github.blog/2013-05-14-closing-issues-via-pull-requests/
