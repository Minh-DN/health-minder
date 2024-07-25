#!/usr/bin/python3
import argparse
import json
import random
from datetime import datetime, timedelta

import javaproperties
import requests

# CONSTANTS
HM_DEV_INTERNAL_BASE_URL = "http://localhost:8080/api/v1/internal"
APP_PROPERTIES_FILE_PATH = "../resources/application.properties"


def read_properties(file_path):
    with open(file_path, 'r') as f:
        properties = javaproperties.load(f)
    return properties


def add_a_health_stat_to_a_worker(user_id, date, api_key, test):
    # Set up for the API call
    url = f"{HM_DEV_INTERNAL_BASE_URL}/health-stat"
    headers = {
        'Content-type': 'application/json',
        'Api-Key': api_key
    }
    payload = generate_mock_health_stat_payload(user_id, date)
    data = json.dumps(payload)

    # Execute the API call
    response = True if test else requests.post(url, headers=headers, data=data)
    if response:
        print(f'Successfully added: {payload}')
        return True
    else:
        print(f'Failed to add {payload}: {response.text}')
        return False


def generate_mock_health_stat_payload(user_id, date):
    # Total seconds in a day
    total_seconds_per_day = 86400

    # Generate random steps taken between 0 and 20000
    steps_taken = random.randint(0, 20000)

    # Generate random sleep time in seconds (between 6 and 10 hours)
    sleep_time_seconds = random.randint(5 * 3600, 10 * 3600)

    # Generate random active time in seconds (between 0.5 and 3 hours)
    active_time_seconds = random.randint(0.5 * 3600, 3 * 3600)

    # Generate random computer screen time in seconds (between 0.5 and 6 hours)
    computer_screen_time_seconds = random.randint(0.5 * 3600, 6 * 3600)

    # Generate random phone screen time in seconds (between 0.5 and 4 hours)
    phone_screen_time_seconds = random.randint(0.5 * 3600, 4 * 3600)

    # Calculate remaining sedentary time
    sedentary_time_seconds = total_seconds_per_day - (
            sleep_time_seconds + active_time_seconds + computer_screen_time_seconds + phone_screen_time_seconds
    )

    # Construct the payload
    payload = {
        "userId": user_id,
        "date": date,
        "stepsTaken": steps_taken,
        "sleepTime": sleep_time_seconds,
        "activeTime": active_time_seconds,
        "sedentaryTime": sedentary_time_seconds,
        "computerScreenTime": computer_screen_time_seconds,
        "phoneScreenTime": phone_screen_time_seconds
    }

    return payload


if __name__ == "__main__":
    # Set up argument parser
    args_parser = argparse.ArgumentParser()
    # Script currently populates for each day from the from_date to the current day
    args_parser.add_argument('--from_date', type=str, required=True)
    args_parser.add_argument('--user_id', type=str, required=True)
    args_parser.add_argument('--test', type=str, required=True)
    args = args_parser.parse_args()

    # Read args
    from_date_str = args.from_date
    test = args.test.lower() != 'false'
    user_id = args.user_id

    # Parse the from_date
    from_date = datetime.strptime(from_date_str, '%d-%m-%Y').date()
    current_date = datetime.today().date()

    # Read properties
    properties = read_properties(APP_PROPERTIES_FILE_PATH)
    api_key = properties.get("internal.api.key")

    # Loop through each day and send a request
    current_day = from_date
    while current_day <= current_date:
        date_str = current_day.isoformat()
        add_a_health_stat_to_a_worker(user_id, date_str, api_key, test)
        current_day += timedelta(days=1)
