provider "google" {
    credentials = file("practica-11-12-6f739f630297.json")
    project = "practica-11-12"
    region = "us-west1"
    zone = "us-west1-a"
}

resource "random_id" "instance_id" {
    byte_length = 8  
}

resource "google_compute_instance" "nueva" {
    name = "practica12-${random_id.instance_id.hex}"
    can_ip_forward          = false
    deletion_protection     = false
    enable_display          = false
    guest_accelerator       = []
    labels                  = {}
    machine_type            = "f1-micro"
    metadata                = {
        "ssh-keys" = <<-EOT
            andrea:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC4YmUElAql+TMy3HhZLjl7BTgcJz+nWG2G7rArsEebVbxZUTQ6x1zhHk1sWFZHXXsxZLMEI0zxsrTQE1b4mNpqQh9p/D7MAt8px3ygTi4r0aKwfVIneO82xBtntmZYGUEkrWuKiodANAG0SwY09dHcI7oW6GiuH/HPm2J6ZjVwYSefo4rH0B1CUfH+HjCjZiLbN6kkV80+fjKuTKm57OJRfBMEcJKv4uvo0RFB9KTVNllpcklQ2CBlah3ady3TvKB0T8a/Grjzd7cbC1hZwNM+AnNQVOi+ny5yYqy8/U3rdJ5NdmV9gIuOA63aOyEhIFfG90c1AAAuNj3IGZ1SA/bx andrea@DESKTOP-RVHRQ82
        EOT
    }
    metadata_startup_script = " sudo apt-get update; sudo apt-get install -yq build-essential python-pip rsync; sudo apt install python-pip; pip install flask "
    project                 = "practica-11-12"
    resource_policies       = []
    tags                    = []
    zone                    = "us-west1-a"

    boot_disk {
        auto_delete = true
        mode        = "READ_WRITE"

        initialize_params {
            image  = "https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/debian-9-stretch-v20210420"
            labels = {}
            size   = 10
            type   = "pd-standard"
        }
    }

    network_interface {
        network            = "https://www.googleapis.com/compute/v1/projects/practica-11-12/global/networks/default"
        subnetwork         = "https://www.googleapis.com/compute/v1/projects/practica-11-12/regions/us-west1/subnetworks/default"
        subnetwork_project = "practica-11-12"

        access_config {
            network_tier = "PREMIUM"
        }
    }

    scheduling {
        automatic_restart   = true
        min_node_cpus       = 0
        on_host_maintenance = "MIGRATE"
        preemptible         = false
    }

    timeouts {}
}