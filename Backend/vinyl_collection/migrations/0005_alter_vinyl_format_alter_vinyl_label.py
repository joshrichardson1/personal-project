# Generated by Django 4.0.4 on 2022-06-02 00:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vinyl_collection', '0004_vinyl_format_vinyl_label'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vinyl',
            name='format',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vinyl',
            name='label',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]