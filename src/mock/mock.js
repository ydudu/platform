import Mock from 'mockjs';

export default{
  mockData () {
    Mock.mock('/api/user',{
      "code": "000",
      "datas": {
        "name": "@cname",
        "area": "@province(true)",
        "identity": "超级管理员"
      }
    });
    Mock.mock('/api/getTable', {
      "code": "000",
      "datas|5-20":[
        {
          "date": '@date("yyyy-MM-dd")',
          "name": "@cname",
          "address": "@county(true)"
        }
      ]
    });
    Mock.mock('/api/getOptions', {
      "code": "000",
      "datas|5-7": [
        {
          "label": '江苏省',
          "value": "@natural(10, 100)",
          "children|5-8": [
            {
              "label": '苏州市',
              "value": "@natural(10, 100)",
              "children|5-5": [
                {
                  "label": '姑苏区',
                  "value": "@natural(10, 100)"
                }
              ]
            }
          ]
        }
      ],
      "places|9-18": [
        {
          "label": '江苏省',
          "value": "@natural(10, 100)"
        }
      ]
    })
  }
}
