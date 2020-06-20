import sys

TEMPLATE = """,
            extra: {0}/{1},
            bottom: {2}/{3}"""

if len(sys.argv) < 4:
    print("Usage: {0} height bottom top".format(sys.argv[0]))
    sys.exit(1)

height = int(sys.argv[1])
bottom = height - int(sys.argv[2])
top = height - int(sys.argv[3])

print(TEMPLATE.format(
    (height - bottom),
    (top - bottom),
    bottom,
    height
))