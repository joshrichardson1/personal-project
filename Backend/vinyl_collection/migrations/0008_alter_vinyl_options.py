# Generated by Django 4.0.4 on 2022-06-06 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vinyl_collection', '0007_alter_vinyl_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='vinyl',
            options={'ordering': ('artist', 'album')},
        ),
    ]
