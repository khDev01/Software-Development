from bs4 import BeautifulSoup
import requests
import csv
import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import numpy as np

columnNo = []
columnA = []
columnB = []

x = '11111111'
# book 1 has 23 lessons
# for x in range(1, 24):
url = 'https://www.gia.edu/report-check?reportno=11111111'
response = requests.get(url, timeout=5)
# print(response.status_code) # 200 OK page is present
soup = BeautifulSoup(response.content, "html.parser")
print (soup.find(id="MEASUREMENTS"))
    # columnA.append(rows.text)
    # columnNo.append(x)

# # convert to excel
# df = pd.DataFrame({'Lesson':columnNo,
#                    'English':columnA,
#                    'Arabic':columnB})
# writer = ExcelWriter('Software-Development\\Test.xlsx')
# df.to_excel(writer,'Sheet1',index=False)
# writer.save()


# https://www.gia.edu/report-check?reportno=11111111