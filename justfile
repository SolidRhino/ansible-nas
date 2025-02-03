#!/usr/bin/env -S just --justfile

# Default target - list all available commands
default:
    @just --list

## Playbook Operations

# Run the playbook
ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K --skip-tags "nfs,samba"