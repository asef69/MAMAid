from django.db import models
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta
# Create your models here.

User=get_user_model()

class Cycle(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='cycles')
    last_period_date=models.DateField()
    cycle_length=models.PositiveIntegerField(default=28)
    next_period_date=models.DateField(blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)

    def save(self,*args,**kwargs):
        if self.last_period_date and self.cycle_length:
            self.next_period_date=self.last_period_date + timedelta(days=self.cycle_length)
        super().save(*args,**kwargs)

    def predict_next_cycle(self,count=3):
        """Predict the next 'count' cycles based on the last period date and cycle length.
        """    
        dates=[]
        base=self.next_period_date or (self.last_period_date + timedelta(days=self.cycle_length))
        for i in range(count):
            dates.append(base + timedelta(days=i*self.cycle_length))
        return dates

class Pregnancy(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name='pregnancy')
    lmp=models.DateField(help_text="Last Menstrual Period")
    due_date=models.DateField(blank=True,null=True)
    notes=models.TextField(blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)


    @property
    def gestational_days(self):
        return (datetime.now().date() - self.lmp).days
    
    @property
    def current_week(self):
        return max(0,self.gestational_days//7)
    
    @property
    def trimester(self):
        week=self.current_week
        if week<13:
            return "First Trimester"
        elif week<27:
            return "Second Trimester"
        else:
            return "Third Trimester"
            

