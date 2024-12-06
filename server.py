import http.server
import ssl
import socketserver

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

handler = Handler
httpd = socketserver.TCPServer(("", PORT), handler)
print(f"Serving at port {PORT}")
httpd.serve_forever()
