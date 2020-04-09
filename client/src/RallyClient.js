import rally from 'rally';
const API_KEY = '_z3TAZxvhQ3iJ4uVWlxMpyhqkIThJMktoVQeVxoArso'
export function exportActionItems(actionItems){
    const client = rally({
        apiKey: API_KEY, //preferred, required if no user/pass, defaults to process.env.RALLY_API_KEY
        requestOptions: {
            headers: {
                'X-RallyIntegrationName': 'NoveList Retro Tool',  //while optional, it is good practice to
                'X-RallyIntegrationVendor': 'NoveList',             //provide this header information
                'X-RallyIntegrationVersion': '1.0'                    
            }
            //any additional request options (proxy options, timeouts, etc.)     
        }
    });
    actionItems.map((item, idx) => client.create({
        type: 'hierarchicalrequirement',
        data:{
            Name: 'action item ' + idx,
            Description: item.Value
        }
    })
    );
    
}