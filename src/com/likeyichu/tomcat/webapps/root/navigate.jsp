<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>跳转ing...</title>
</head>
<body>
	<%
		String str = request.getRequestURL().toString();
		if (str.contains("hxq"))
			response.sendRedirect("http://hxqvivian.lofter.com");
		else if (str.contains("xq"))
			response.sendRedirect("http://xq.likeyichu.com/qing");
		else if (str.contains("me"))
			response.sendRedirect("http://me.likeyichu.com/me/views/index.html");
		else
			response.sendRedirect("index.jsp");
	%>
</body>
</html>
