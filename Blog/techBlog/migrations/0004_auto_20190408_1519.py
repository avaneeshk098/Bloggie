# Generated by Django 2.2 on 2019-04-08 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('techBlog', '0003_auto_20190408_1157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='new',
            name='created',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
