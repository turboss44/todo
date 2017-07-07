var Todo = require('./model_db');

  function getTodos(res) {
      Todo.find(function (err, todos) {

          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err) {
              res.send('cos sie zjebalo');
          }

          res.json(todos); // return all todos in JSON format
      });
  };

  module.exports = function (app) {

    app.get('/api/todos', function(req, res) {

        // moongose
        getTodos(res);
    });

    app.post('/api/todos', function(req, res) {
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send('post nie dziala');
          getTodos(res);

        });

    });

    app.delete('/api/todos/:todo_id', function (req, res) {
      console.log(req.params.todo_id);

            Todo.remove({
                _id: req.params.todo_id
            }, function (err, todo) {
                if (err)
                    res.send('delete nie dziala');
                getTodos(res);
            });
        });
      };
