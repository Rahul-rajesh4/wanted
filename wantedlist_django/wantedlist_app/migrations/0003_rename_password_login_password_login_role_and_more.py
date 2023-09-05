# Generated by Django 4.2.3 on 2023-08-24 06:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("wantedlist_app", "0002_register"),
    ]

    operations = [
        migrations.RenameField(
            model_name="login",
            old_name="password",
            new_name="Password",
        ),
        migrations.AddField(
            model_name="login",
            name="role",
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="register",
            name="log_id",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="wantedlist_app.login",
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="register",
            name="user_status",
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
    ]