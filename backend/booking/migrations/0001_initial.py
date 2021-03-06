# Generated by Django 3.1.4 on 2022-01-07 11:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Date', models.DateField()),
                ('Time', models.TimeField()),
                ('Status', models.CharField(max_length=10)),
                ('Client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.client')),
            ],
        ),
    ]
