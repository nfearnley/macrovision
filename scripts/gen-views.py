import os
import sys

TEMPLATE = """      {0}: {{
            height: math.unit(6, "feet"),
            weight: math.unit(150, "lb"),
            name: "{1}",
            image: {{
                source: "./{2}{3}"
            }}
        }},
"""

if len(sys.argv) < 1:
    print("Usage: {0} [dir]".format(sys.argv[0]))
    sys.exit(64)

result = ""

for file in os.listdir(sys.argv[1]):
    name = " ".join(map(lambda x: x.capitalize(), file[:-4].split("-")))
    key = "".join(map(lambda x: x.capitalize(), file[:-4].split("-")))
    key = key[0].lower() + key[1:]
    
    result += TEMPLATE.format(key, name, sys.argv[1].split("\\")[-1], file)

print(result)