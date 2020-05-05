import plotly.express as px
from airtable import Airtable
import pandas as pd
import dash
import dash_core_components as dcc
import dash_html_components as html
from airtable import Airtable

#Airtable Data
base_key = 'appl4hiR4DMyx28Bg'
table_name = 'Tenders (Published)'
api_key = 'keyZ09GT0FWjXWkX4'
tenders_published = Airtable(base_key, table_name, api_key)

#Piechart Data
categories = Airtable(base_key, "Categories", api_key)
categories_records = categories.get_all()
df_categories = pd.DataFrame.from_records((r['fields'] for r in categories_records))
df_tendercount = df_categories[['Name','Tenders Count']].copy()
fig = px.pie(df_tendercount, values='Tenders Count', names = 'Name',title = "Tender Categories")

#Configure Dash app
external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = html.Div([
    dcc.Graph(figure=fig)

])

if __name__ == '__main__':
    app.run_server(debug=True)
#airtable.__path__

#Generate key from: https://airtable.com/account
#Our base key: appl4hiR4DMyx28Bg