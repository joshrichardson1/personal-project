# Generated by Django 4.0.4 on 2022-06-02 00:35

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vinyl_collection', '0003_vinyl_discogs_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='vinyl',
            name='format',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None),
        ),
        migrations.AddField(
            model_name='vinyl',
            name='label',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None),
        ),
    ]
