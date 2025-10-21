from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def health_check(request):
    return JsonResponse({
        'status': 'healthy', 
        'service': 'Django Backend',
        'message': '🎉 Django está funcionando!'
    })

def home_page(request):
    from django.http import HttpResponse
    return HttpResponse("""
    <html>
        <head><title>Plataforma de Dados</title></head>
        <body>
            <h1>Trabalho de Conclusão de Curso</h1>
            <p>Ana Célia Baía Araújo</p>
            <ul>
                <li><a href="/admin/">Admin Django</a></li>
                <li><a href="/api/health/">API Health Check</a></li>
            </ul>
        </body>
    </html>
    """)