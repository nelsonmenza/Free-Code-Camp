from django.shortcuts import get_object_or_404, render

from .models import Item


def detail(request, pk):
    item = get_object_or_404(Item, pk=pk)
    print(item)
    return render(request, 'items/detail.html', {
        'item ': item
    })
