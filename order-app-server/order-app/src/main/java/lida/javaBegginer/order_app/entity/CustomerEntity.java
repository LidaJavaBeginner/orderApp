package lida.javaBegginer.order_app.entity;

import lida.javaBegginer.order_app.constant.Countries;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity(name = "customer")
public class CustomerEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String firstName;

        @Column(nullable = false)
        private String lastName;

        @Column(nullable = false)
        private String email;

        @Column(nullable = false)
        private String phoneNumber;

        @Column(nullable = false)
        private String street;

        @Column (nullable = false)
        private String city;

        @Column(nullable = false)
        private String zipCode;

        @Column(nullable = false)
        @Enumerated(EnumType.STRING)
        private Countries country;

        @OneToMany(mappedBy = "customer")
        private List<OrderEntity> orders = new ArrayList<>();


}
