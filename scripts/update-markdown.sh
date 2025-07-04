#!/bin/bash


sed -i '' "s/{{VERSION}}/$VERSION/" .github/PULL_REQUEST_TEMPLATE/merge_down_to_develop.md
sed -i '' "s/{{DATE}}/$DATE/" .github/PULL_REQUEST_TEMPLATE/merge_down_to_develop.md
