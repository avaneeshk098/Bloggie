# Generated by Django 2.2 on 2019-04-08 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('techBlog', '0005_article'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('video', models.FileField(default='', upload_to='')),
            ],
        ),
    ]
