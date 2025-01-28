@Entity
@Table(name = "language_master")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Language_Master {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "language_id")
    private Long languageId;

    @Column(name = "language_desc", nullable = false, length = 255)
    private String languageDesc;

    @ManyToOne
    @JoinColumn(name = "type_id", nullable = false)
    private Product_TypeMaster productType;
}
