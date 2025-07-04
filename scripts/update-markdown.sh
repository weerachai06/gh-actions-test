#!/bin/bash




# แทนที่แค่คำแรกที่เจอ (ไม่ใส่ g)
sed -i '' "s/{{VERSION}}/$VERSION/" README.md
sed -i '' "s/{{DATE}}/$DATE/" README.md
sed -i '' "s/{{AUTHOR}}/$AUTHOR/" README.md