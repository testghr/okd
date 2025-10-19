FROM alpine:latest
RUN apk add --no-cache bind-tools
ENV DNS_SERVER=172.30.0.10
ENTRYPOINT ["sh", "-c", "dig @${DNS_SERVER} $0"]