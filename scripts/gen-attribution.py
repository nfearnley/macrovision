import os
import sys

TEMPLATE = """{{ name: "{0}", source: {1}, nsfw: false }},\n"""

if len(sys.argv) < 1:
    print("Usage: {0} [dir]".format(sys.argv[0]))
    sys.exit(64)

result = ""
source = '"' + sys.argv[2] + '"' if len(sys.argv) > 2 else "null"

for file in os.listdir(sys.argv[1]):
    result += TEMPLATE.format(file, source)

print(result)