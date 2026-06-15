import urllib.request
import json
url = "https://api.github.com/users/parth091006/repos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        repos = json.loads(response.read().decode())
        for r in repos:
            print(f"Name: {r.get('name')}")
            print(f"Desc: {r.get('description')}")
            print(f"Lang: {r.get('language')}")
            print("---")
except Exception as e:
    print(e)