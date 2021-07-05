# 1.Callback là gì?

Nói một cách đơn giản: Callback là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong - vì thế nó có tên là callback.

Cụ thể hơn: Trong JavaScript, hàm là đối tượng. Do đó, các hàm có thể lấy các hàm làm đối số và có thể được trả về bởi các hàm khác. Các hàm thực hiện điều này được gọi là higher - order function (Hàm bậc cao hơn). Bất kỳ hàm nào được truyền dưới dạng đối số được gọi là hàm callback.

# 2.Promise là gì?

Promise là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell hay pyramid of doom, là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng. Các tác vụ bất đồng bộ có thể là gửi AJAX request, gọi hàm bên trong setTimeout, setInterval hoặc requestAnimationFrame, hay thao tác với WebSocket hoặc Worker.

# 3.Async/await là gì?

Được giới thiệu trong ES8, async/await là một cơ chế giúp bạn thực hiện các thao tác bất đồng bộ một cách tuần tự hơn. Async/await vẫn sử dụng Promise ở bên dưới nhưng mã nguồn của bạn (theo một cách nào đó) sẽ trong sáng và dễ theo dõi.

Để sử dụng, bạn phải khai báo hàm với từ khóa async. Khi đó bên trong hàm bạn có thể dùng await.

Cần lưu ý là kết quả trả về của async function luôn là một Promise.