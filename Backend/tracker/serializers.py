
from rest_framework import serializers

from tracker.models import Cycle, Pregnancy


class CycleSerializer(serializers.ModelSerializer):
    predictions=serializers.SerializerMethodField()

    class Meta:
        model = Cycle
        fields = ['id', 'last_period_date', 'cycle_length', 'next_period_date', 'predictions']

    def get_predictions(self,obj):
        return obj.predict_next_cycle()
    

class PregnancySerializer(serializers.ModelSerializer):
    current_week=serializers.ReadOnlyField()
    trimester=serializers.ReadOnlyField()    

    class Meta:
        model = Pregnancy
        fields = ['id', 'user', 'lmp', 'due_date', 'notes', 'created_at', 'current_week', 'trimester']
        read_only_fields = ['user', 'created_at', 'current_week', 'trimester']