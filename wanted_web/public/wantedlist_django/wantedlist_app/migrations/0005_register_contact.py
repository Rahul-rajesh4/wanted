# Generated by Django 4.2.4 on 2023-08-26 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wantedlist_app', '0004_remove_register_email_remove_register_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='register',
            name='Contact',
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
    ]