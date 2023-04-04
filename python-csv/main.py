import csv

with open('example.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Name', 'Age', 'Country'])
    writer.writerow(['John', '25', 'USA'])
    writer.writerow(['Mary', '30', 'Canada'])
