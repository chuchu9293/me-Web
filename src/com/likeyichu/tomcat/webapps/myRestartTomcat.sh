#!/bin/sh
#重启tomcat的脚本
/soft/apache-tomcat-8.0.20/bin/shutdown.sh
ping -c 10 qq.com> /dev/null
/soft/apache-tomcat-8.0.20/bin/startup.sh