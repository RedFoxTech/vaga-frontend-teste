from django.db import models


# Create your models here.

class Pokemon(models.Model):

    name = models.CharField(
        max_length=255,
        null=False,
        blank=False
    )

    heigth = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        null=False,
        blank=False
    ) 

    ability_name = models.CharField(
        max_length=255,
        null=False,
        blank=False
    )  

    busca = models.Manager()
 