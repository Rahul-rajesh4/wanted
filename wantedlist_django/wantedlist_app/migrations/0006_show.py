# Generated by Django 4.2.4 on 2023-09-04 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wantedlist_app', '0005_register_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='show',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Firstname', models.CharField(max_length=30)),
                ('Lastname', models.CharField(max_length=30)),
                ('Category', models.CharField(max_length=30)),
                ('Age', models.CharField(max_length=30)),
                ('Price', models.CharField(max_length=30)),
            ],
        ),
    ]
