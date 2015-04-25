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
		int pos=str.indexOf(".likeyichu.com");
		str = str.substring(0, pos);
		if (str.equals("hxq"))
			response.sendRedirect("http://hxqvivian.lofter.com");
		//request.getRequestDispatcher("http://hxqvivian.lofter.com").forward(request, response);
		else if (str.equals("xq"))
			response.sendRedirect("http://xq.likeyichu.com/qing");
		//request.getRequestDispatcher("/qing").forward(request, response);
		else if (str.equals("me"))
			response.sendRedirect("http://me.likeyichu.com/me");
		else
			request.getRequestDispatcher("index.jsp").forward(request,
					response);
	%>
</body>
</html>
