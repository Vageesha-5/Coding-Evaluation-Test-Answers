#find out the given date is valid or invalid? date:30/02/2020, 31/03/2000, 31/07/2029
from datetime import datetime
def is_valid_date(date_str):
    try:
        datetime.strptime(date_str, '%d/%m/%Y')
        return True
    except ValueError:
        return False
dates = ["30/02/2020", "31/03/2000", "31/07/2029"]
for date in dates:
 if is_valid_date(date):
    print(f"{date}")
#Output: 30/02/2020: Invalid
#31/03/2000: Valid
#31/07/2029: Valid