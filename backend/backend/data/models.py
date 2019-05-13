from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    """
    Custom user implementation that inherits from the AbstractUser provided by the django framework.
    This custom class is designed to add additional fields to the AbstractUser class. 
    """
    is_patient = models.BooleanField(default=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    midwife = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        # Custom save method to check if a patient has a midwife or a midwife does not have a midwife.
        if self.is_patient:
            if self.midwife is None:
                raise ValueError('Patient needs a midwife')
        else:
            if self.midwife is not None:
                raise ValueError('Midwife cannot have a midwife')
        super(CustomUser, self).save(*args, **kwargs)


class Data(models.Model):

    class Meta:
        verbose_name_plural = "Data"

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    hcg_value = models.FloatField()
    date_of_measurement = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Custom validation to confirm data is only saved for a patient
        if not self.user.is_patient:
            raise ValueError('Can only save data for a patient!')
        else:
            super(Data, self).save(*args, **kwargs)

    def __str__(self):
        """ A string representation of the data model """
        username = self.user.username.title()
        return f'{username} measured {self.hcg_value} on: {self.date_of_measurement}'
