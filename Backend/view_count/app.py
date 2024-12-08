import json
import boto3


# import requests

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('<Table Name>')


def get_visitor_count():
    # Retrieves visitor count from db
    try:
        response = table.get_item(
            Key = {
                'Stats':'Views'
            }
        )
        count = response['Item']['num']
        return count
    except Exception as e:
        return {
            "statusCode": 500,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
            'body': json.dumps({'error': str(e)})
        }

def increment_visitor_count(visit_count):
    # Adds to the DB table
    new_count = str(int(visit_count)+1)
    response = table.put_item(
        Item = {
            'Stats':'Views',
            'num': new_count
        }
    )
    return new_count


def lambda_handler(event, context):
    
    try:
        visit_count = get_visitor_count()
        new_count = increment_visitor_count(visit_count)

        return {
            "statusCode": 200,
            'headers':{
                'Access-control-Allow-Headers':'*',
                'Access-control-Allow-Origin':'*',
                'Access-control-Allow-Methods':'*'
            },
            'body': new_count
        }
    except Exception as e:
        return {
            "statusCode": 500,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
            'body': json.dumps({'error': str(e)})
        }