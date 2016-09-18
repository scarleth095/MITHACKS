<!DOCTYPE html>
<html>
<head>
    <title>JSSample</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
</head>
<body>

<script type="text/javascript">
    $(function(faceId1, faceId2) {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.projectoxford.ai/face/v1.0/verify?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{'a882d3dbe9cf418a8834a7dfd2f4867d'}");
            },
            type: "POST",
            // Request body
            data: "{
                    "faceId1":"c5c24a82-6845-4031-9d5d-978df9175426",
                    "faceId2":"815df99c-598f-4926-930a-a734b3fd651c }"
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });
</script>
</body>
</html>