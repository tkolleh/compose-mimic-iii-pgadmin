import http.client

conn = http.client.HTTPConnection("0,0,0,0")

payload = "{\n    \"query\": \"query { allTransfers { nodes { patientBySubjectId { subjectId\\n gender\\n dob\\n dod\\n rowId}\\n eventtype\\n subjectId\\n eventtype\\n dbsource}}}\",\n    \"variables\": null\n}"

headers = {
    'Content-Type': "application/json",
    'Accept-Encoding': "gzip, deflate",
    'Accept-Language': "en-US,en;q=0.9,pt;q=0.8",
    'Accept': "application/json",
    'Referer': "http://0.0.0.0:5000/graphiql",
    'Connection': "keep-alive",
    'cache-control': "no-cache"
    }

conn.request("POST", "graphql", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
