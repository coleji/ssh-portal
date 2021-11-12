FROM ubuntu:focal
RUN apt-get update
RUN apt-get install ssh -y
CMD ssh $SSH_USER@$SSH_HOST $SSH_OPTS
