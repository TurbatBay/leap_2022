

        var topLeft = new Point(10, 20);
        var rectSize = new Size(100, 100);
        var rect = new Rectangle(topLeft, rectSize);

        var path = new Path.Rectangle(rect, 100);
        path.fillColor = 'red'