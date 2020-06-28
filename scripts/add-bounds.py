import sys
import re
from xml.etree import ElementTree

from pathlib import Path

for path in Path(sys.argv[1]).rglob('*.svg'):
    tree = ElementTree.ElementTree()
    parsed = tree.parse(path)

    if "width" not in parsed.attrib:
        print(f"Rewriting {path}")
        
        width, height = parsed.attrib["viewBox"].split(" ")[-2:]

        # I'd rather avoid mangling the XML files by parsing them first
        # XML is awful and we never should have invented it :(

        with open(path, "r") as file:
            data = file.read()

        data = re.sub('viewBox="0 0', f'width="{width}" height="{height}" viewBox="0 0', data)

        with open(path, "w") as file:
            file.write(data)